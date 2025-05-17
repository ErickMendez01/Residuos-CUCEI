"use client";

import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Componente } from "@/generated/prisma/client";
import ComponentMoreOptionsButton from "./ComponentOptionsButton";
import { Button } from "@/components/ui/button";
import {NewComponentRegister} from "./NewComponentRegister";

type CompleteComponent = Componente;

export default function ComponentDisplayContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [components, setComponents] = useState<CompleteComponent[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchComponents = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/components-material?page=${currentPage}&itemsPerPage=${itemsPerPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch components");
        }
        const data = await response.json();
        setComponents(data.components as CompleteComponent[]);
        setTotal(data.total);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchComponents();
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(total / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto w-full pb-8 pt-2">
       <NewComponentRegister isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <div className="flex justify-end mb-4">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-bold"
        >
          + Nuevo Componente
        </Button>
      </div>
      <div className="mt-6 overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">Cargando...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <Table aria-label="Lista de dispositivos" isHeaderSticky removeWrapper>
            <TableHeader>
              <TableColumn>Modelo</TableColumn>
              <TableColumn>Marca</TableColumn>
              <TableColumn>Numero Serie</TableColumn>
              <TableColumn>Tipo Componente</TableColumn>
              <TableColumn>Opciones</TableColumn>
            </TableHeader>
            <TableBody>
              {components.map((component) => (
                <TableRow key={component.id_componente}>
                  <TableCell>
                    {component.modelo}
                  </TableCell>
                  <TableCell>{component.marca}</TableCell>
                  <TableCell>
                    {component.numero}
                  </TableCell>
                  <TableCell>
                    {component.tipo_componente}
                  </TableCell>
                  <TableCell>
                    <ComponentMoreOptionsButton component={component} componentId={component.id_componente}>
                      <Button className="bg-black full-width text-white  dark:bg-white dark:text-black px-4 py-2 rounded-lg font-bold">
                        <BsThreeDotsVertical/>
                      </Button>
                    </ComponentMoreOptionsButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <div className="mt-6 flex justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage <= 1}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

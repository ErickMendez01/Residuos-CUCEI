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
  User as Avatar,
  Chip,
} from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { User } from "@/generated/prisma/client";
import UsersMoreOptionsButton from "./DispositiveOptionsButton";
import { Button } from "@/components/ui/button";

type CompleteUser = User;

export default function UsersDisplayContent() {
  const [filterName, setFilterName] = useState("");
  const [filterCode, setFilterCode] = useState("");
  const [filterRol, setFilterRol] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [users, setUsers] = useState<CompleteUser[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/users?page=${currentPage}&itemsPerPage=${itemsPerPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.users as CompleteUser[]);
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
    fetchUsers();
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(total / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto w-full pb-8 pt-2">
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
          <Table aria-label="Lista de usuarios" isHeaderSticky removeWrapper>
            <TableHeader>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Genero</TableColumn>
              <TableColumn>Origen</TableColumn>
              <TableColumn>Opciones</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar
                      name={user.name || user.email || "Usuario"}
                      avatarProps={{
                        radius: "lg",
                        src: user.image || "/image/user.png",
                      }}
                      description={user.email}
                    />
                  </TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>
                    {user.country}, {user.city}
                  </TableCell>
                  <TableCell>
                    <UsersMoreOptionsButton user={user} userId={user.id}>
                      <Button className="bg-black full-width text-white  dark:bg-white dark:text-black px-4 py-2 rounded-lg font-bold">
                        <BsThreeDotsVertical/>
                      </Button>
                    </UsersMoreOptionsButton>
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

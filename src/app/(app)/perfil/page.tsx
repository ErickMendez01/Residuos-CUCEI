import UserProfile from "@/modules/profile/UserProfile";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>No estás autenticado.</div>;
  }

  return (
    <div>
      <UserProfile id={Number(session.user.id)} />
    </div>
  );
}

import Image from "next/image";

const getDogsData = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { revalidate: 15 },
  });
  const data = await response.json();
  return data;
};

export default async function Home() {
  const randomDog = await getDogsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={randomDog.message}
        width={300}
        height={300}
        alt="random dog picture"
      />
    </main>
  );
}

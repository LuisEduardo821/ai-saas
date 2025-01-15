import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/logo.svg" />
      </div>
      <p className="text-sm text-muted-foreground">Genius esta pensando...</p>
    </div>
  );
};

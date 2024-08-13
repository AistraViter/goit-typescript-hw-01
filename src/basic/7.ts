type User = {
  name: string;
};

type Page = {
  title: string;
  likes: number;
  accounts: User[];
  status: "open" | "close";
  details?: {
    createAt?: Date;
    updateAt?: Date;
  };
};

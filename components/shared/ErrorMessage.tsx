import { RefetchOptions,UseQueryResult } from "@tanstack/react-query";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  message: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<UseQueryResult>;
}

const ErrorMessage = ({ message, refetch }: ErrorMessageProps) => {
  const handleRetry = () => {
    refetch();
  };

  return (
    <>
      <div className="flex justify-center items-center text-lg gap-2 text-red-600">
        <AlertTriangle />
        <h1 className="text-center">Oops! {message}</h1>
      </div>
      <div className="text-center mt-5">
        <Button onClick={handleRetry} className="">
          Retry
        </Button>
      </div>
    </>
  );
};

export default ErrorMessage;

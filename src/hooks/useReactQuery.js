import { useEffect, useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import useToast from "./useToast";

const useReactQuery = () => {
  const [queryClient] = useState(() => new QueryClient());
  const { showToast } = useToast();

  useEffect(() => {
    return () => {
      queryClient.clear();
    };
  }, [queryClient]);

  const globalQueryOptions = {
    client: queryClient,
    staleTime: 300000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (error) => {
      showToast(error?.message || "Network Error!", {
        type: "error",
      });
    },
  };

  const useFetch = (queryKey, queryFn, options) => {
    return useQuery(queryKey, queryFn, { ...globalQueryOptions, ...options });
  };

  const useAppMutation = (mutationFn, options) => {
    const mutation = useMutation(mutationFn, {
      ...globalQueryOptions,
      ...options,
    });
    const { mutate } = mutation;

    mutation.mutate = async (variables, ...rest) => {
      try {
        await mutate(variables, ...rest);
        showToast("Operation Successfull!", {
          type: "success",
        });
      } catch (error) {
        showToast(error?.message || "Network Error!", {
          type: "error",
        });
        throw error;
      }
    };

    return mutation;
  };

  return { useFetch, useAppMutation };
};

export default useReactQuery;

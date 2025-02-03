"use client";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function GuestGuard({ children }: Props) {
  // const router = useRouter();

  // const { loading, authenticated } = useAuthContext();

  // const [isChecking, setIsChecking] = useState<boolean>(true);

  // const checkPermissions = async (): Promise<void> => {
  //   if (loading) {
  //     return;
  //   }

  //   if (authenticated) {
  //     router.replace(paths.main.root);
  //     return;
  //   }

  //   setIsChecking(false);
  // };

  // useEffect(() => {
  //   checkPermissions();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [authenticated, loading]);

  // if (isChecking) {
  //   return <SplashScreen />;
  // }

  return <>{children}</>;
}

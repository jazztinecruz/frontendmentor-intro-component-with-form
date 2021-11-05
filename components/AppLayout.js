import ContentLayout from "./ContentLayout";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto,1fr,auto] items-center'>
      <header>
        <ContentLayout />
      </header>

      <main>
        <ContentLayout>
          {children}
        </ContentLayout>
      </main>

      <footer>
        <ContentLayout>
          <Footer />
        </ContentLayout>
      </footer>
    </div>
  );
}
export default AppLayout;
import Header from '@/components/Header';
import Explanation from '@/components/Explanation';
import PastGames from '@/components/PastGames';
import Start from '@/components/Start';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Explanation />
      <PastGames />
      <Start />
      <Footer />
    </main>
  );
}

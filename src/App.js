import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

const InicioApp = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      //carrega lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pega destaque
      let originals = list.filter((i) => i.slug === 'orginals');
      let randomNumber = Math.floor(
        Math.random() * originals[0].items.results.length - 1,
      );
      let chosen = originals[0].items.results[randomNumber];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrolListenet = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrolListenet);
    return () => {
      window.removeEventListener('scroll', scrolListenet);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com{' '}
        <span role="img" aria-label="coracao">
          ♥
        </span>{' '}
        por Mariola
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            alt="loading"
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
          ></img>
        </div>
      )}
    </div>
  );
};

export default InicioApp;

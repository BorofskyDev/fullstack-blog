import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import { Menu } from '../components/Menu';

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1582391988484-3f1691bc1401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1645623545590-37dadb9224e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 Days Ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem
          cumque non fugiat ea. Placeat, dolore? Dolore quae quam tempora
          voluptatem ratione quisquam ex pariatur! Itaque, quos. Possimus,
          corporis quam! Iusto inventore illum aspernatur perferendis eaque
          exercitationem consectetur ut nulla delectus a. Labore dolor pariatur
          quisquam illum neque voluptates, ullam perferendis illo, itaque quia
          ipsam, non nihil? Ducimus, eligendi? Ullam? Aliquam fuga, voluptas
          ratione asperiores ipsa exercitationem quidem cupiditate aspernatur
          non eaque fugit dicta unde ea sunt nisi autem id culpa doloribus
          voluptatem delectus sequi. Nisi sed quas doloremque ex! Sint non alias
          porro veniam voluptatibus aut dicta fugiat perspiciatis odit debitis
          illo, quaerat saepe reprehenderit facilis a eligendi nisi quisquam
          tempore quibusdam eius rerum exercitationem, architecto perferendis?
          Non, quasi.
          <br />
          <br />
          Error ut, illo, non ipsam vero in nulla debitis distinctio quam,
          dignissimos itaque at animi dicta facere alias odio ipsa autem. Illum
          beatae corrupti earum dicta omnis officia aut soluta. Provident fugit
          libero nemo necessitatibus repudiandae. Provident culpa ab nobis quae,
          itaque, minima pariatur atque quasi rem obcaecati esse magni eaque,
          nulla harum laborum? Ad quia accusamus deserunt repellendus aperiam?
          Reprehenderit a, minima dignissimos nulla rerum assumenda vero tempore
          nemo. Dolor minus eaque, distinctio voluptatibus labore nemo at
          exercitationem asperiores voluptates obcaecati natus hic dolore
          repellendus accusamus fuga, ex modi. Officiis, alias tempore ipsam
          exercitationem atque impedit omnis nobis quia dolores repellat ex eos,
          nemo est voluptate facere deserunt saepe dolore animi qui quo
          eligendi. Non dolorem recusandae sint soluta. Corrupti nam ipsa
          reprehenderit, omnis sit quisquam deleniti. Animi quia architecto,
          sunt accusantium corrupti hic amet consectetur! Nihil ex quas vel,
          aliquid in facere deleniti minus similique? Labore, quidem officia.
          Aliquam consequuntur veritatis nemo. Quas, consectetur quae quod
          eligendi, amet voluptatum aspernatur sit a et id quaerat hic impedit
          incidunt voluptas quis deleniti accusamus voluptate commodi. Magnam
          dicta quo eveniet.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eaque
          neque exercitationem aliquam accusantium non ipsum doloremque, alias
          blanditiis ea dolorem fuga delectus dolor itaque debitis! Cumque
          deleniti saepe maxime. Mollitia, iusto eum velit itaque labore rem
          quas at, ut recusandae error voluptatem accusamus dolor libero
          adipisci, perferendis ab necessitatibus perspiciatis laborum ratione
          rerum doloremque aliquam quos obcaecati aliquid. Nesciunt! Quam amet
          deserunt, dolorem iusto quasi officiis, magnam accusamus libero
          doloribus saepe possimus expedita? Vero velit incidunt minus
          asperiores magnam mollitia! Unde obcaecati, ipsam ipsum tempore non at
          dicta qui. Dignissimos repudiandae nam blanditiis nemo maiores dicta
          libero, unde sapiente corrupti saepe, accusantium pariatur animi
          possimus consequuntur ipsum maxime eveniet at nobis, ea sint.
          Explicabo sapiente numquam necessitatibus architecto qui. Consequatur
          ullam blanditiis repellendus quis odio inventore cum voluptas
          cupiditate nam hic excepturi repellat expedita ducimus, maiores minima
          dolore officiis minus et quas vel consectetur quasi laudantium, iusto
          itaque. Saepe. Voluptates magni nobis quod? Quibusdam, quod. Vero
          autem eligendi nostrum consectetur ipsum fugiat magni quos tempora,
          voluptates dolor architecto, debitis excepturi laboriosam sit deleniti
          accusantium labore similique nulla, a incidunt? Cum totam commodi
          aspernatur perferendis aut doloribus laboriosam sit ut! Vero minus
          saepe earum sunt asperiores tempore omnis voluptate, enim fuga tenetur
          error adipisci quisquam eius.
          <br />
          <br />
          Dicta id sit et! Sint repellat voluptas dolore nobis eum labore earum
          voluptatibus eos, dolorum deserunt cupiditate omnis eveniet odit,
          reprehenderit necessitatibus. Adipisci facilis ipsa temporibus
          distinctio eaque soluta debitis asperiores ut tempora totam?
          Doloremque corrupti totam adipisci eveniet ipsam labore, nisi facilis
          officia perspiciatis amet assumenda quibusdam, molestias nostrum dolor
          harum ut voluptatibus. Necessitatibus alias consectetur laudantium
          placeat inventore! Quibusdam iure fugit quas.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;

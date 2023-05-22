import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Microservicios',
    Svg: require('@site/static/img/microservice-icon.svg').default,
    description: (
      <>
        El software está compuesto por pequeños servicios independientes, que se comunican 
        entre sí a través de APIs bien definidas.         
      </>
    ),
  },
  {
    title: 'Programación reactiva',
    Svg: require('@site/static/img/Untitled.svg').default,
    description: (
      <>
        Se basa en la lógica de programación asíncrona y el uso de flujos de datos automatizados, para 
        gestionar las actualizaciones de datos de los contenidos, cada vez que un usuario realiza una 
        consulta.
      </>
    ),
  },
  {
    title: 'Contenedores',
    Svg: require('@site/static/img/docker-svgrepo-com.svg').default,
    description: (
      <>
        Unidad de software, donde se empaquetan los ejecutables, el código binario, las bibliotecas 
        y los archivos de configuración necesarios para que se pueda ejecutar en cualquier lugar.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

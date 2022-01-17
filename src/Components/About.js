import React from 'react';
import './About.css'


class About extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <div className="">
        <p>Данный сайт является информационно-учебным проектом.<br />
          Цель проекта - создать SPA, отработать навыки API запросов и обработки ответа (в json формате), использовать компонентный подход и роутинг с помощью
          библиотек React и React-Routing. <br />
          В оформлении использовать CSS библиотеку Mustard. Переопределять CSS свойств библиотеки под необходимости данного проекта.
          Использовать BEM-методологию.<br />
          Деплой React-приложения на сервер. Использовать сервис Firebase. API - от Центробанка РФ. 
        </p>

      </div>
    )
  }
};

export default About;
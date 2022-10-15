import CodeSnippet from 'components/codeSnippet/CodeSnippet';

import './App.css';

function App() {
  const object=`
    const people=[
      {
        name: "Tim",
        money: 30000
      },
      {
        name: "Tom",
        money: 40000
      },
      {
        name: "Mary",
        money: 60000
      }
    ];
  `;

  const filter=`
    const filter_result=people.filter(person=>{
      return person.money>50000;
    });
    console.log(filter_result);
  `;
  
  const map=`
    const map_result=people.map(person=>{
      person.money=person.money+5000;
      return person;
    });
    console.log(map_result);
  `;

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="article">
          <h2 className="title">Javascript Array 的方法</h2>
          <p className="text">利用以下資料作為範例</p>
          <CodeSnippet code={object} language="javascript" />
          <p className="text">以下為filter例子</p>
          <CodeSnippet code={filter} language="javascript" />
          <p className="text">以下為map例子</p>
          <CodeSnippet code={map} language="javascript" />
        </div>
      </div>
    </section>
  );
}

export default App;
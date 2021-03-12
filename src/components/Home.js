import React, { useEffect } from 'react';

function Home(props) {
  useEffect(() => {
    if (props.msg) {
      setTimeout(()=>{
        props.showMessage(null)
      }
      ,3000)
    }
  })

  return (
    <>
      {props.msg?
        <div className="alert alert-success" role="alert">
          {props.msg}
        </div>
        :  <></>
      }
      <h1 className="text-center mt-2">Home</h1>
    </>
  );
}

export default Home;

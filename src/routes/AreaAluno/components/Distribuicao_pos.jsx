import React from "react";

const Distribuicao_pos = (
  <React.Fragment>
    <div className="d-lg-none">
      <a target="blank" href="distrib_pos.pdf"><p>Distribuição das disciplinas para 2019.2</p></a>
    </div>
    <div className="d-none d-lg-block">
        <embed src="/distrib_pos.pdf" type="application/pdf" width="100%" height="600px"></embed>
    </div>
  </React.Fragment>
  );

export default Distribuicao_pos;

import React from 'react';
import { formClass } from './FormSearch.style';

interface ParamsFormSearch{ 
   onSubmit: (nickName: any) => void;
   onReset: () => void;
 }

function FormSearch(params: ParamsFormSearch) {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // nao recarregou a pagina - comp padrao submit
      params.onSubmit(e.currentTarget); //$emit
   }
   return ( 
      <form onSubmit={handleSubmit} onReset={params.onReset}>
         <input type="search" className={formClass.input} required />
         <button type="submit">Pesquisar</button>
         <button type="reset">Limpar</button>
      </form>
   )
}

export default FormSearch;
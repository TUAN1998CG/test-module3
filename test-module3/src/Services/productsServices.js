import axios from 'axios';


export async function  getProducts() {
   try{
      const reponse = await axios.get('http://localhost:3000/products');
      const data = reponse.data
   }catch(e){
      return e
   }


}








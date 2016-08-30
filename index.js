import Metalsmith from 'metalsmith';


export default function (files, m, next) {
  
  console.log(files);

  next();

}
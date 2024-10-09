import React from 'react'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

const fotos = {
    estephania : [
       {
           original: 'https://img-9gag-fun.9cache.com/photo/axM987b_700bwp.webp',
           thumbnail: 'https://img-9gag-fun.9cache.com/photo/axM987b_700bwp.webp'
       },
       {
           original: 'https://i.pinimg.com/736x/eb/74/ca/eb74ca297aa35313b7bfc9fcfff2ab69.jpg',
           thumbnail: 'https://i.pinimg.com/736x/eb/74/ca/eb74ca297aa35313b7bfc9fcfff2ab69.jpg'
       },
       {
           original: 'https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/398310294_122100507578100422_24100445366962966_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IozFKtDFqdIQ7kNvgGIxqsf&_nc_ht=scontent-eze1-1.xx&_nc_gid=A7fWhMipdzLFM93iE4x8dLS&oh=00_AYB_bx1xjYeYvg3HFzrfFVv2Td2LbXfB8STRppF1Yy-crQ&oe=670A6234',
           thumbnail: 'https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/398310294_122100507578100422_24100445366962966_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IozFKtDFqdIQ7kNvgGIxqsf&_nc_ht=scontent-eze1-1.xx&_nc_gid=A7fWhMipdzLFM93iE4x8dLS&oh=00_AYB_bx1xjYeYvg3HFzrfFVv2Td2LbXfB8STRppF1Yy-crQ&oe=670A6234'
       },
       {
           original: 'https://media.licdn.com/dms/image/v2/D4D22AQF8tcxYTXdlZQ/feedshare-shrink_800/feedshare-shrink_800/0/1688946389673?e=2147483647&v=beta&t=vKjAbEPxc4F9Dbg9f_xazMqiMtVrr2mW55yQOuerMXs',
           thumbnail: 'https://media.licdn.com/dms/image/v2/D4D22AQF8tcxYTXdlZQ/feedshare-shrink_800/feedshare-shrink_800/0/1688946389673?e=2147483647&v=beta&t=vKjAbEPxc4F9Dbg9f_xazMqiMtVrr2mW55yQOuerMXs'
       },
       {
           original: 'https://pbs.twimg.com/media/FSAmahdaIAMu0Ef?format=jpg&name=large',
           thumbnail: 'https://pbs.twimg.com/media/FSAmahdaIAMu0Ef?format=jpg&name=large',
       },
       {
           original: 'https://iv1.lisimg.com/image/25607861/740full-estephania-ha.jpg',
           thumbnail: 'https://iv1.lisimg.com/image/25607861/740full-estephania-ha.jpg'
       }
   ],
   genesis : [
      {
          original: 'https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/461068318_122135729864326531_6756910049374939418_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mx9ahRY5uSwQ7kNvgHPQ1eS&_nc_ht=scontent-eze1-1.xx&_nc_gid=AI6NYbQRld2Z_S7zrucGDxW&oh=00_AYCzyQFDiKYUj7ZS7KUfWdyWKERL2776dJ0N8QhKW8pP3g&oe=670A8FF3',
          thumbnail: 'https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/461068318_122135729864326531_6756910049374939418_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mx9ahRY5uSwQ7kNvgHPQ1eS&_nc_ht=scontent-eze1-1.xx&_nc_gid=AI6NYbQRld2Z_S7zrucGDxW&oh=00_AYCzyQFDiKYUj7ZS7KUfWdyWKERL2776dJ0N8QhKW8pP3g&oe=670A8FF3'
      },
      {
          original: 'https://cdn-strg-img.profile-rate.com/storage/ph146_6831_1703701900.jpg',
          thumbnail: 'https://cdn-strg-img.profile-rate.com/storage/ph146_6831_1703701900.jpg'
      },
      {
          original: 'https://modelsintro.com/cover/img/genesis-lopez-fashion-cover-photo-B8hs39qhPOh.webp',
          thumbnail: 'https://modelsintro.com/cover/img/genesis-lopez-fashion-cover-photo-B8hs39qhPOh.webp'
      },
      {
          original: 'https://pbs.twimg.com/media/F07Zt3fWcAAhhYK.jpg:large',
          thumbnail: 'https://pbs.twimg.com/media/F07Zt3fWcAAhhYK.jpg:large'
      },
  ],
  emily : [
      {
          original: 'https://www.record.com.mx/sites/default/files/galerias/2017/12/29/3.jpg',
          thumbnail: 'https://www.record.com.mx/sites/default/files/galerias/2017/12/29/3.jpg'
      },
      {
          original: 'https://imagez.tmz.com/image/31/16by9/2016/08/26/316cec80ebd956d98fe1d549d722b971_xl.jpg',
          thumbnail: 'https://imagez.tmz.com/image/31/16by9/2016/08/26/316cec80ebd956d98fe1d549d722b971_xl.jpg'
      },
      {
          original: 'https://qph.cf2.quoracdn.net/main-qimg-17632c2bb3ef2fccb2595f13c90f9497-lq',
          thumbnail: 'https://qph.cf2.quoracdn.net/main-qimg-17632c2bb3ef2fccb2595f13c90f9497-lq'
      },
  ],
}
// const beppler = [{}];
// const jessica = [{}];
// const laura = [{}];
// const marie = [{}];
// const riae = [{}];
const imageDefault = [
    {
        original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPo-DTXfpPRJmUNZ3L-bGH95M_ojPORLz2Q&s',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPo-DTXfpPRJmUNZ3L-bGH95M_ojPORLz2Q&s'
    }
]

class Galeria extends React.Component {
    componentDidUpdate(prevProps) {
        // Verifica si el id ha cambiado
        if (this.props.id !== prevProps.id) {
          // Forzar re-render cuando cambie el id
          this.forceUpdate();
        }
      }
      
    render() {
        const { id } = this.props;
      
        const items = fotos[id] || imageDefault
         return <ImageGallery
            items={items}   //Ver la manera de colocar algun valor por defecto
            showBullets={true}
            showThumbnails={false}
            slideDuration={300}
        />;
    }
}

 
export default Galeria;



 

 
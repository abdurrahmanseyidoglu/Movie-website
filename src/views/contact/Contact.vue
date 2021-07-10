<template>
  <div class="contact">
    <div class="contact__header">
      <img
        class="contact__header-img"
        src="../../../images/contactusImages/popcorn.jpg"
        alt="popcorn"
      />
      <div class="contact__header-form">
        <p class="contact__header-form-contact" >COTACT</p>
        <p class="contact__header-form-contact-us">Contact <span class="span">Us</span></p>
        <div class="contact__header-info">
        <div class="contact__header-phone-adress">
        <ul >
          <li><h3>PHONE</h3></li>
          <li><P>(552)558-3018</P></li>
        </ul>
           <ul >
          <li><h3>ADRESS</h3></li>
          <li><P>5678 EXtrea RD. Lorem ipsum dolor sit.</P></li>
        </ul> 
        </div>
          <div class="contact__header-email">
          <ul >
          <li><h3>Email</h3></li>
          <li><P>abdurrahmanseyidoglu@gmail.com</P></li>
          </ul> 
          </div>
        </div>
        <form action="" class="contact__form">
          <div class="contact__form-nameMail">
            <input type="text" name="email" placeholder="Name" />
            <input type="text" name="name" placeholder="Email Adress" />
          </div>
          <div class="contact__form-message">
          <textarea type="text" name="name" placeholder="Message" />
          </div>
          <div class="contact__form-btn">
           <input type="submit" value="Submit"/>
          </div>
         
        </form>
      </div>
    </div>
    <div class="refund">
    <div class="refund__main">
      <h3 class="refund__title">REFUNDS</h3>
      <p class="refund__header">Get a <span> Refund </span></p>
      <p class="refund__paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Excepturi quam ex ad, debitis sit numquam illum beatae cumque ut explicabo,
        suscipit iusto tenetur, molestias voluptate? 
        Atque consequuntur voluptates sint laborum!
        <br>
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, tempora explicabo est tenetur accusantium id reprehenderit? Ipsum, sit ratione natus ducimus possimus cumque! Minima accusantium odit deserunt mollitia sunt quisquam!
      </p>
      <button class="refund__btn">
        REQUEST
      </button>
    </div>
    
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.contact {
  
  background-color: $black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &__form{
    border: solid 2px $purple;
    border-radius: 5px;
    
  }
  &__header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &-img {
      margin-left: 100px;
      width: 30%;
      height: 700px;
    }
    &-form{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 200px;
    }
    &-form-contact{
        color: red;
        font-weight: bold;
        font-size: 1rem;
    }
    &-form-contact-us{
          margin:0;
          line-height: 100px;
          color: $white;
          font-size: 100px;
         
        span{
          font-weight: bolder;
        }
    
    }
    &-phone-adress{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 200px;
     

    }
    &-info{
      h3{
        color: $purple;
      }
      p{
        color: $white;
      }
      ul{
        list-style: none;
      }
      display: flex;
      flex-direction:column;
      flex-wrap: wrap;
      
    }
  }
  &__form-nameMail{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin : 20px;
    color: $black;
    border: none;

    input{
      color: $purple;
      font-weight: bold;
      width: 40%;
      height: 40px;
      border: none;

      background-color:rgb(71, 68, 68) ;
      &::placeholder{
        color: rgb(204, 193, 193);
        margin-left: 20px;
      
      }
    }
  }
  &__form{
    margin-bottom: 30px;
  }
    &__form-message{      
      color: $black;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
    textarea{
      color: $purple;
      font-weight: bold;
      width: 78%;
      height: 150px;
      border: none;
     
      background-color:rgb(71, 68, 68) ;
      &::placeholder{
        color: rgb(204, 193, 193);
        float: left;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
    }
    &__form-btn{
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      margin: 30px 70px;
      input{
      padding: 20px;
      width:170px;
      margin-top: 20px;
      color: $white;
      background-color: $purple;
      border-radius: 8px;
      border: none;
      font-weight: bolder;
      font-size: 1.2rem;
      &:hover{
        background-color: #573eb3;
        cursor: pointer;

      }
      }
     
      
    }
    
}


  .refund{
    background-image: url(../../../images/contactusImages/refund.jpg);
    background-size: 100%;   
    &__main{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color:white;
    }
    &__title{
      margin: 10;
      color: red;
      font-size: 20px;
      line-height: 30px;

    }
    &__header{
      margin: 0;
      font-size: 2rem;
      line-height:3rem ;
      span{
        font-weight: bolder;
        font-size: 3rem;
      }
    }
    &__paragraph{
      width: 40%;
      color: rgb(233, 230, 230);
      font-size: 1.1rem;
      line-height: 30px;
    }
    &__btn{
      padding: 20px;
      width:170px;
      margin-top: 20px;
      color: $white;
      background-color: #A91D27;
      border-radius: 8px;
      border: none;
      font-weight: bolder;
      font-size: 1.2rem;
      margin-bottom: 50px;
      &:hover{
      background-color: #dd3944;
      cursor: pointer;
      
      }
    }

  }
  
</style>

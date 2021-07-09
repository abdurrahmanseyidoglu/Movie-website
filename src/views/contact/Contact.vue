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
          <input type="submit" value="Submit" class="contact__form-btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.contact {
  
  background-color: $black;
  &__form{
    border: solid 2px $purple;
    border-radius: 5px;
    
  }
  &__header {
    display: flex;
    flex-direction: row;

    &-img {
      margin-left: 100px;
      width: 30%;
      height: 700px;
    }
    &-form{
        display: flex;
        flex-direction: column;
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
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin : 20px;
    color: $black;
    input{
      color: $purple;
      font-weight: bold;
      width: 40%;
      height: 40px;
      
      background-color:rgb(71, 68, 68) ;
      &::placeholder{
        color: rgb(204, 193, 193);
        margin-left: 20px;
      
      }
    }
  }
    &__form-message{      
      color: $black;
      align-items: center;
      justify-content: center;
      display: flex;
    textarea{
      color: $purple;
      font-weight: bold;
      width: 78%;
      height: 150px;
     
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
      padding: 20px;
      width:170px;
      margin-top: 20px;
      color: $white;
      background-color: $purple;
      
    }
}
</style>

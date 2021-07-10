<template>
  <div class="contact">
    <div class="contact__header">
      <img
        class="contact__header-img"
        src="../../../images/contactusImages/popcorn.jpg"
        alt="popcorn"
      />
      <div class="contact__header-form">
        <p class="contact__header-form-contact">COTACT</p>
        <p class="contact__header-form-contact-us">
          Contact <span class="span">Us</span>
        </p>
        <div class="contact__header-info">
          <div class="contact__header-phone-adress">
            <ul>
              <li><h3>PHONE</h3></li>
              <li><P>(552)558-3018</P></li>
            </ul>
            <ul>
              <li><h3>ADRESS</h3></li>
              <li><P>5678 EXtrea RD. Lorem ipsum dolor sit.</P></li>
            </ul>
          </div>
          <div class="contact__header-email">
            <ul>
              <li><h3>Email</h3></li>
              <li><P>abdurrahmanseyidoglu@gmail.com</P></li>
            </ul>
          </div>
        </div>
        <form @submit.prevent="send" class="contact__form">
          <div class="contact__form-nameMail">
            <input type="text" name="email" placeholder="Name" v-model="name" />
            <input type="text" name="name" placeholder="Email Adress" v-model="email"/>
          </div>
          <div class="contact__form-message">
            <textarea type="text" name="name" placeholder="Message" v-model="message" />
          </div>
          <div class="contact__form-btn">
            <input type="submit" value="Submit" />
          </div>
          <h2 class="messageSent">{{ messageSent }}</h2>
        </form>
      </div>
    </div>
    <div class="refund">
      <div class="refund__main">
        <h3 class="refund__title">REFUNDS</h3>
        <p class="refund__header">Get a <span> Refund </span></p>
        <p class="refund__paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quam ex ad,
          debitis sit numquam illum beatae cumque ut explicabo, suscipit iusto tenetur,
          molestias voluptate? Atque consequuntur voluptates sint laborum!
          <br />
          <br />
        </p>
        <button class="refund__btn">REQUEST</button>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
    </div>
    <div class="faq">
      <h3 class="faq__title">FAQ</h3>
      <h1 class="faq__header">See <span> Answers </span></h1>
      <ul class="faq__questions">
        <li class="faq__question">
          Lorem ipsum dolor sit amet, consectetur adipisicing?
        </li>
        <li class="faq__answer">
          Dolore minima rerum dicta reiciendis, maiores tenetur nisi sint!
        </li>
        <li class="faq__question">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, provident?
        </li>
        <li class="faq__answer">
          quidem iusto labore dolorum quod consectetur dolore quaerat nam maxime!
        </li>
        <li class="faq__question">sapiente odit ex consequuntur iure a ducimus?</li>
        <li class="faq__answer">Illo aspernatur consequuntur fugit itaque.</li>
        <li class="faq__question">
          velit in magni consectetur totam qui quaerat, blanditiis optio eos, assumenda
          ipsam repellat?
        </li>
        <li class="faq__answer">aperiam saepe. Sunt, velit consequuntur.</li>
        <li class="faq__question">
          tempora explicabo est tenetur accusantium id reprehenderit?
        </li>
        <li class="faq__answer">
          Sed tempore ipsum quidem modi maxime culpa pariatur nemo labore.
        </li>
      </ul>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7619627204385!2d28.977986315374263!3d41.00858297930076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sHagia%20Sophia!5e0!3m2!1sen!2str!4v1625915116078!5m2!1sen!2str"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
  let firebaseConfig = {
    apiKey: "AIzaSyC_7K6Kebhj13diEeOXxl8RW9tTX9o7ESk",
    authDomain: "moviesland-74a37.firebaseapp.com",
    projectId: "moviesland-74a37",
    storageBucket: "moviesland-74a37.appspot.com",
    messagingSenderId: "745664444858",
    appId: "1:745664444858:web:6e43c1fb5aebf3fca08583"
  };
   firebase.initializeApp(firebaseConfig);

   export default {

     setup(){
       let name = ref("");
       let email = ref("");
       let message =  ref("");
       let messageSent = ref ("");
       const customersMessagesDB = firebase.firestore(); 
       const customersMessages = customersMessagesDB.collection("customersMessages");
      
      const send = ()=>{
        customersMessages.doc().set({
          name : name.value,
          email : email.value,
          message : message.value, 
        })
        name.value = "";
        email.value= "";
        message.value="";
        messageSent.value= "message sent !"
        


      }
      return {
        name,
        email,
        message,
        messageSent,
        send,

      }

     }
   }
</script>

<style lang="scss">
.contact {
  background-color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &__form {
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
    &-form {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-left: 200px;
    }
    &-form-contact {
      color: red;
      font-weight: bold;
      font-size: 1rem;
    }
    &-form-contact-us {
      margin: 0;
      line-height: 100px;
      color: $white;
      font-size: 100px;

      span {
        font-weight: bolder;
      }
    }
    &-phone-adress {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 200px;
    }
    &-info {
      h3 {
        color: $purple;
      }
      p {
        color: $white;
      }
      ul {
        list-style: none;
      }
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  

  &__form-nameMail {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
    color: $black;
    border: none;

    input {
      color: $purple;
      font-weight: bold;
      width: 40%;
      height: 40px;
      border: none;

      background-color: rgb(71, 68, 68);
      &::placeholder {
        color: rgb(204, 193, 193);
        margin-left: 20px;
      }
    }
  }

  &__form {
    margin-bottom: 30px;
  }
  &__form-message {
    color: $black;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    textarea {
      color: $purple;
      font-weight: bold;
      width: 78%;
      height: 150px;
      border: none;

      background-color: rgb(71, 68, 68);
      &::placeholder {
        color: rgb(204, 193, 193);
        float: left;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
  }
  &__form-btn {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    margin: 30px 70px;
    input {
      padding: 20px;
      width: 170px;
      margin-top: 20px;
      color: $white;
      background-color: $purple;
      border-radius: 8px;
      border: none;
      font-weight: bolder;
      font-size: 1.2rem;
      &:hover {
        background-color: #573eb3;
        cursor: pointer;
      }
    }
  }
  @include mq(tablet, max) {
    .contact {
      &__header {
        &-img {
          display: none;
        }
        &-phone-adress {
          gap: 0;
        }
        &-form {
          margin: 0;
          align-items: center;
          justify-content: center;
          &-contact-us {
            font-size: 2rem;
            margin: 0;
            padding: 0;
          }
        }
      }
      
      &__form {
        align-items: center;
        justify-content: center;
        &-btn {
        margin-bottom: 20px;
        margin-top: 0;
        align-items: center;
        justify-content: center;
      }
      }
      
    }
  }
}
.refund {

  background-image: url(../../../images/contactusImages/refund.jpg);
  background-size: 100%;
  &__main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  &__title {
    margin: 10;
    color: red;
    font-size: 20px;
    line-height: 30px;
  }
  &__header {
    margin: 0;
    font-size: 2rem;
    line-height: 3rem;
    span {
      font-weight: bolder;
      font-size: 3rem;
    }
  }
  &__paragraph {
    width: 40%;
    color: rgb(233, 230, 230);
    font-size: 1.1rem;
    line-height: 30px;
  }
  &__btn {
    padding: 20px;
    width: 170px;
    margin-top: 20px;
    color: $white;
    background-color: #a91d27;
    border-radius: 8px;
    border: none;
    font-weight: bolder;
    font-size: 1.2rem;
    margin-bottom: 50px;
    &:hover {
      background-color: #dd3944;
      cursor: pointer;
    }
  }
@include mq(tablet, max) {
  background-image:unset;
  &__paragraph{
    width: 100%;
    padding: 0 10px;
    margin-bottom: 0;
  }
  &__btn{
    margin : 0;
    
  }
  

}



}

.faq {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: $white;
  &__title {
    margin: 0;
    color: red;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
  }
  &__header {
    font-size: 2rem;
    margin: 0;

    span {
      font-size: 3rem;
    }
  }
  &__questions {
    list-style: none;
  }
  &__question {
    background-color: rgb(53, 52, 52);
    padding: 15px;
    font-weight: bold;
  }
  &__answer {
    background-color: gray;
    padding: 15px;
    margin-bottom: 10px;
  }
  @include mq(tablet, max) {
    margin: 0;
    &__questions{
      margin: 5px;
      padding: 0;
    }
   
  }
}

.map {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 400px;
  margin-bottom: 30px;
  filter: invert(100%);
  iframe {
    width: 70%;
  }
  @include mq(tablet, max) {

   width: 100%;
   height: 300px;
   iframe{
    height: 200px;
   }
  
  }
  
}
.messageSent {
    color: rgb(25, 190, 25);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

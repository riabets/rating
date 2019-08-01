<template>
    <div class="popup_wrapper" v-if="popupVisible">
        <div class="popup_content" :class="{'rating_submitted': submittedRating === true}">
            <div class="close_button" v-on:click="popupToggle()">
                <img src="~@/assets/close.png" alt="" >
            </div>
            <h3 class="popup_main_heading">How did we do?</h3>
            <p class="heading_text">Please let us know how your food delievery was. It will really help us to keep improving our service!</p>

            <div class="rating_wrapper">
                <div class="rating_block">
                    <h4 class="rating_heading">How would you rate your food?</h4>
                    <stars :id="1"></stars>
                </div>
                <div class="rating_block">
                    <h4 class="rating_heading">How would you rate your delivery driver?</h4>
                    <stars :id="2"></stars>
                </div>
                <div class="rating_block">
                    <h4 class="rating_heading">How would you rate your overall experience?</h4>
                    <stars :id="3"></stars>
                </div>
                <div class="rating_response">
                    <p class="response_note">Thank you for your response!</p>
                </div>
            </div>

            <button class="submit_button" v-on:click="submitRating()">Submit feedback</button>

        </div>
    </div>
</template>
<script>
import Stars from "./Stars";

export default {
    data(){
        return {
            id: null,
            popupVisible: true,
            submittedRating: false
        }
    },
    components: {
        Stars
    },
    methods: {
        //Set rating result into JSON and showing thank you note
        submitRating(){
            this.submittedRating = !this.submittedRating;
            console.log(JSON.stringify(this.$store.state.ratingData));
        },
        //Close popup
        popupToggle(){
            this.popupVisible = !this.popupVisible;
        }
    }
}
</script>
<style lang="scss">
.popup_wrapper {
    background-color: rgba(#D8D8D8, 1);
    position:fixed;
    top: 0;
    bottom:0;
    width:100%;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    z-index: 1000;
}
.popup_content {
    max-width:650px;
    width:100%;
    height: auto;
    background-color: #FCFCFC;
    box-shadow: 0 10px 10px rgba(0,0,0,0.15);
    position:relative;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding:60px 80px;
    text-align: center;
    animation-name: appear;
    animation-duration: 2s;
    transition:height 200ms ease-in;
    @media screen and (max-width:767px){
        padding: 20px 35px;
    }
}
@keyframes appear {
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
}
.close_button {
    position:absolute;
    right:-13px;
    top: -13px;
    width:46px;
    height:46px;
    background-color:#000;
    border-radius: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition:transform 200ms ease-in;
    @media screen and (max-width:767px){
        width:23px;
        height:23px;
        top:-5px;
        right:-5px;
    }
    img {
        width:22px;
        height:22px;
        @media screen and (max-width:767px){
            width:11px;
            height:11px;
        }
    }
    &:hover {
        cursor:pointer;
        transform:scale(1.1);
        transition:transform 200ms ease-in;
    }
}
.rating_wrapper {
    position: relative;
    transition: height 300ms ease-in;
}
.rating_block {
    width:100%;
    text-align: center;
    margin-bottom: 50px;

    @media screen and (max-width:767px){
        margin:0 0 15px 0;
    }
}
.rating_response {
    height: 100%;
    display: none;
    position: absolute;
    top:0;
    left:0;
    right:0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #FCFCFC;
    transition: height 300ms ease-in;
    .response_note {
        @include regular;
        font-size:21px;
        line-height: 30px;
        margin:0 0 32px 0;
        @media screen and (max-width:767px){
            font-size: 14px;
            line-height: 16px;
            margin:0 0 10px 0;
        }
    }
}
.popup_main_heading {
    @include regular;
    font-weight: bold;
    font-size: 36px;
    line-height: 1.5;
    color:#1D1D1D;
    margin:0;
    @media screen and (max-width:767px){
        font-size: 18px;
    }
}
.heading_text {
    @include regular;
    font-size:21px;
    line-height: 30px;
    margin:0 0 32px 0;
    @media screen and (max-width:767px){
        font-size: 14px;
        line-height: 16px;
        margin:0 0 10px 0;
    }
}
.rating_heading {
    @include regular;
    margin:0 0 29px 0;
    font-size:21px;
    line-height: 30px;
     @media screen and (max-width:767px){
        font-size: 14px;
        line-height: 16px;
        margin:0 0 10px 0;
    }
    
}
.submit_button {
    @include regular;
    font-weight: bold;
    background-color: #0021FF;
    border:1px solid #0021FF;
    color:#FCFCFC;
    font-size: 21px;
    line-height: 1;
    border-radius: 5px;
    padding:16px 33px;
    margin:0;
    transition:all 200ms ease-in;
    box-shadow: 0 10px 10px rgba(0,0,0,0.15);
    position:relative;
    overflow:hidden;
    @media screen and (max-width:767px){
        font-size:16px;
        padding:8px 16px;
    }
    &:hover {
        cursor:pointer;
        transition:all 200ms ease-in;
        background-color: #FCFCFC;
        color:#0021FF;
    }
}
.rating_submitted {
    .submit_button {
        opacity: 0;
        transform: rotateX(90deg);
        transition: all 200ms ease;
    }
    .rating_response {
        display: flex;
    }
}
</style>


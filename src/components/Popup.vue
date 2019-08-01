<template>
    <div class="popup_wrapper">
        <div class="popup_content">
            <div class="close_button">
                <img src="~@/assets/close.png" alt="">
            </div>
            <h3 class="popup_main_heading">How did we do?</h3>
            <p class="heading_text">Please let us know how your food delievery was. It will really help us to keep improving our service!</p>

            <div class="rating_block">
                <h4 class="rating_heading">How would you rate your food?</h4>
                <stars></stars>
            </div>
            <div class="rating_block">
                <h4 class="rating_heading">How would you rate your delivery driver?</h4>
                <stars></stars>
            </div>
            <div class="rating_block">
                <h4 class="rating_heading">How would you rate your overall experience?</h4>
                <stars></stars>
            </div>
            <p class="submit_button">Submit feedback</p>
        </div>
    </div>
</template>
<script>
import Stars from "./Stars";

export default {
    components: {
        Stars
    }
}
</script>
<style lang="scss">
.popup_wrapper {
    background-color: #D8D8D8;
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
    img {
        width:22px;
        height:22px;
    }
    &:hover {
        cursor:pointer;
        transition:all 200ms ease-in;
    }
}
.rating_block {
    width:100%;
    text-align: center;
    margin-bottom:50px;
}
.popup_main_heading {
    @include regular;
    font-weight: bold;
    font-size: 36px;
    line-height: 1.5;
    color:#1D1D1D;
    margin:0;
}
.heading_text {
    @include regular;
    font-size:21px;
    line-height: 30px;
    margin:0 0 32px 0;
}
.rating_heading {
    @include regular;
    margin:0 0 29px 0;
    font-size:21px;
    line-height: 30px;
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
    &:hover {
        cursor:pointer;
        transition:all 200ms ease-in;
        background-color: #FCFCFC;
        color:#0021FF;
    }
}
</style>


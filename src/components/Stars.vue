<template>
    <div class="star_rating">
        <label class="star_rating__star" 
            v-for="rating in ratings" 
            :class="{'is-selected': ((value >= rating) && value != null)}" 
            v-on:click="set(rating)" 
            v-on:mouseover="starOver(rating)" 
            v-on:mouseout="starOut" 
            :key="rating">
        <input class="star_rating__checkbox" 
        type="radio" 
        :value="rating" 
        v-model="value"></label>
    </div>
</template>
<script>
export default {    
    data() {
        return {
            hoverValue: null,
            value: null,
            ratings: [1, 2, 3, 4, 5]
        };
    },    
    props: {
        'id': Number,
    },
    methods: {
        //Stars hover functionality and set value commit to store
        starOver(index) {
            this.hoverValue = this.value;
            return this.value = index;
        },
        starOut() {
            return this.value = this.hoverValue;
        },
        set(value) {
            this.hoverValue = value;
            if (this.id === 1){
                this.$store.commit('RATING_DATA_FOOD',  this.value);
            }
            if (this.id === 2){
                this.$store.commit('RATING_DATA_DRIVER',  this.value);
            }
            if (this.id === 3){
                this.$store.commit('RATING_DATA_EXPERIENCE',  this.value);
            }
            return this.value = value;
        }
    },
}
</script>
<style lang="scss">
.star_rating__star {
    display: inline-block;
    width:40px;
    height:38px;
    overflow:hidden;
    @media screen and (max-width:767px){
        width:20px;
        height:19px;
    }
    &:before {
        content:"";
        display:block;
        width:40px;
        height:38px;
        background-image: url("~@/assets/star-e.png");
        background-repeat: no-repeat;
        transition: transform 200ms ease-out;
        @media screen and (max-width:767px){
            width:20px;
            height:19px;
            background-size: contain;
        }
    }
    &:after {
        content:"";
        display:block;
        width:40px;
        height:38px;
        background-image: url("~@/assets/star.png");
        background-repeat: no-repeat;
        transition: transform 200ms ease-out;
        @media screen and (max-width:767px){
            width:20px;
            height:19px;
            background-size: contain;
        }
    }
    &:hover {
      cursor: pointer;
    }
    
    &.is-selected {
      &:before {
        transform: translateY(-38px);
        transition: transform 200ms ease-in;
        @media screen and (max-width:767px){
            transform: translateY(-19px);
        }
      }
      &:after {
        transform: translateY(-38px);
        transition: transform 200ms ease-in;
        @media screen and (max-width:767px){
            transform: translateY(-19px);
        }
      }
    }
}
.star_rating__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px; 
    width: 1px;
    margin: -1px; 
    padding: 0; 
    border: 0;
}
</style>


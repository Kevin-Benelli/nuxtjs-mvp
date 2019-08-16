<template>
    <div>
        <b-row align-h="around">
            <!-- COLUMN 1 -->
            <b-cols sm> 
                <img src="../images/macys-logo.jpg" class ="macys-image fluid" alt="Macy's main Logo">
            </b-cols>
           
            <!-- COLUMN 2 -->
            <b-cols sm> 
                <!-- <div class = "nav-layout"> -->
                        <b-nav class="larger-font active-hover">              
                            <b-nav-item active><nuxt-link to='/'>HOME</nuxt-link></b-nav-item>
                            <b-nav-item active><nuxt-link to='/mens_clothes'>MENS</nuxt-link></b-nav-item>
                            <b-nav-item active><nuxt-link to='/womens_clothes'>WOMENS</nuxt-link></b-nav-item>
                            <b-nav-item active><nuxt-link to='/kids_clothes'>KIDS</nuxt-link></b-nav-item>
                            <b-nav-item active><nuxt-link to='/active_clothes'>ACTIVE</nuxt-link></b-nav-item>

                            <!-- <b-nav-item active>DEALS</b-nav-item>
                            <b-nav-item active>LISTS</b-nav-item>
                            <b-nav-item active>GIFTS</b-nav-item>
                            <b-nav-item active>WEDDING REGISTRY</b-nav-item> -->
                        </b-nav>
           </b-cols>
         <!-- COLUMN 3-->
           <b-cols>
                    <div class= "sign-in-button">
                            <b-dropdown id="dropdown-1" text="Sign In - MY ACCOUNT" class="m-2" size="lg">
                                <b-dropdown-item>
                                    <ul>Star Rewards - </ul>
                                    <ul> Join to Earn Rewards </ul>
                                </b-dropdown-item>

                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>SIGN IN</b-dropdown-item>
                                <b-dropdown-item>MY ACCOUNT</b-dropdown-item>
                                <b-dropdown-item>MACYS CREDIT CARD</b-dropdown-item>
                            </b-dropdown> 
                    </div>
                <!-- </div> -->
            </b-cols>
                
           <!-- COLUMN 4 -->     

           
            <b-cols sm class = "search-style">
                <!-- Adding searching feature -->
                <form @submit.prevent="searchItem">
                    <input type = "text" placeholder="Search Mens, Womens, Kids, or Active" v-model="searchTitle" class = "placeholder-size">
                    <b-button variant="outline-secondary" class="placeholder-size" @click ="searchItem">Item Search...</b-button>
                </form>
            </b-cols>
        </b-row>
                <hr>
    </div>
</template>

<script>

export default{
    data(){
        return{
            searchId:'',
            searchTitle: ''
        }
    },
    methods: {
        searchItem(e){
            if(this.searchTitle === ''){
                console.log("Must enter a search");     
            }
            else{
                console.log(this.searchTitle);
                //   e.preventDefault();
                  this.$router.push('/search/' + this.searchTitle)
                  this.searchTitle = '';
            }
        }
    }
}
</script>

<style scoped>
/* 
.nav-layout{
    padding: (0,0,10vw,10vw);
} */
.page-layout{
    margin: auto;
}

.macys-image{
    width: 15vw;
    height: vh;
    margin-left: 5vw;
}
.layout{
    /* display: inline-flex; */
    width: 50%;
}
.align-right{
    float: right;
    text-align: right;
}


 form{
        display: flex;
        
    }

    input[type="text"]{
        flex:10;
        padding: 1vw;
        width: 80vw;
        
    }

    /* input[type="submit"]{
        flex:2;
    } */
.larger-font{
    font-size: 2vh;
    margin-left: -10vw;
    
}

a{
    padding-top: 3vh;
    text-decoration: none;
    color: #000;
}

.search-style{
    margin-top: 2vh;
}


 a:hover{
            text-decoration:underline;
    }


.placeholder-size{
    font-size: 2vh;
}

.sign-in-button{
    margin-top: 3vh;
}



/* 
 onClickPost(){
            this.$router.push('/search/' + this.searchTitle)
            this.searchTitle = '';
        }, */

</style>


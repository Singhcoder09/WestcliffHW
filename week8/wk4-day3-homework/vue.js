
        // Vue.component('mycomponent1',{
        //     template : `<header><span>Food Blog</span></header>`
        //     });
        Vue.component('mycomponent2',{
            template : `<h2>Comments</h2>`
            });
        Vue.component('mycomponent3',{
            template : `<img src="images/chili.jpg" alt="White Chicken Chili" width="180" class="img-thumbnail">`
            });
        Vue.component('mycomponent4',{
            template : `<nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">Food Blog</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Recipes</a>
                            <a class="nav-item nav-link" href="#">Lifestyles</a>
                            <a class="nav-item nav-link" href="#">Videos</a>
                            <a class="nav-item nav-link" href="#">about</a>
                        </div>
                        </div>
                    </nav>`
            });           
    
            // var vm1 = new Vue({
            //     el: '#component1'
            // });
            var vm2 = new Vue({
                el: '#component2'
            });
            var vm3 = new Vue({
                el: '#component3'
            });
            var vm4 = new Vue({
                el: '#component4'
            });

            var aap = new Vue({
            el: '#vueapp',
            data: {
                obj:{
                     name:'Brianna',
                     isShowMyModal: false,
                     dateTime: 'February 18, 2021 @ 3:30 pm',
                     reply: 'REPLY',
                     para:'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
                     image: 'images/profile.png',
                     foodieLevel: 'Novice',
                     bio:'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
                },
                obj1: {
                    name:'LINH',
                    isShowMyModal: false,
                    dateTime: 'February 15, 2021 @ 9:46 am',
                    reply: 'REPLY',
                    para:'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!',
                    image: 'images/profile.png',
                    foodieLevel:'Newcomer',
                    bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
                },
                obj2: {
                    name:'CATHERINE LEONARDO',
                    isShowMyModal: false,
                    dateTime: 'February 13, 2021 @ 12:58 pm',
                    reply: 'REPLY',
                    para:'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.',
                    image: 'images/profile.png',
                    foodieLevel: 'Mentor',
                    bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!'
                },
                obj3: {
                    name:'KALI',
                    isShowMyModal: false,
                    dateTime: 'February 13, 2021 @ 11:31 am',
                    reply: 'REPLY',
                    para:'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
                    image: 'images/profile.png',
                    foodieLevel: 'Novice',
                    bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I\'m a food whore! Invite me over for dinner and I\'ll be there!'
                },
            },
            methods : {

                    displayInfo : function() {
                        this.obj.isShowMyModal = !this.obj.isShowMyModal;
                     
                    },
                    displayInfo1 : function() {
                        this.obj1.isShowMyModal = !this.obj1.isShowMyModal;
                        console.log("im here 1");
                    },
                    displayInfo2 : function() {
                        this.obj2.isShowMyModal = !this.obj2.isShowMyModal;
                        console.log("im here2");
                    },
                    displayInfo3 : function() {
                        this.obj3.isShowMyModal = !this.obj3.isShowMyModal;
                        console.log("im here3");
                    },
            },
            
            });  
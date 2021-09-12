import VueRouter from 'vue-router'
import Red from "@/components/Red";
import Yellow from "@/components/Yellow";
import Green from "@/components/Green";
export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/red',
            name:'red',
            component:Red,

        },
        {
            path:'/yellow',
            name:'yellow',
            component:Yellow
},
        {
            path:'/green',
            name:'green',
            component:Green

        }
    ]
})
<template>
    <div>
        <button @click="showed=!showed">toggle</button>
        <!-- <transition appear>
            <h1 v-show="showed">Hello World</h1>
        </transition> -->
        <transition name="xyz" appear>
            <h1 v-show="showed">Hello World</h1>
        </transition>
    </div>
</template>
<script>
export default{
    name: 'TheAnimation',
    data() {
        return {
            showed: true
        }
    }
}
</script>
<style scoped>
h1 {
    background-color: aqua;
    transition: 3s linear;
}
.xyz-enter {
    transform: translateX(-100%);
}
.xyz-enter-to {
    transform: translateX(0);
}
.xyz-leave {
    transform: translateX(0);
}
.xyz-leave-to {
    transform: translateX(-100%);
}
/* .v-enter-active {
    animation-name: skate;
    animation-duration: 1s;
}
.v-leave-active {
    animation-name: skate;
    animation-duration: 1s;
    animation-direction: reverse;
}
@keyframes skate {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
    
} */
</style>
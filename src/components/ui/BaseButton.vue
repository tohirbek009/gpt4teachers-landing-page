<template>
    <div class="btn btn-get-start">
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.btn {
    line-height: 60px;
    height: 60px;
    text-align: center;
    max-width: 280px;
    cursor: pointer;
    color: $white;
    margin-left: auto;
    margin-right: auto;
}

.btn-get-start {
    font-weight: 600;
    font-size: 18px;
    transition: all 0.5s;
    position: relative;
}

.btn-get-start::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 8px;
    background-color: rgba(15, 174, 150, 0.5);
    transition: all 0.3s;
}

.btn-get-start:hover {
    color: $success !important;
}

.btn-get-start:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
}

.btn-get-start::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 8px;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid $success;
    transform: scale(1.2, 1.2);
}

.btn-get-start:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}
</style>
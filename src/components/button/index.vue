<template>
    <button class="vui-button" :class="className" :style="{ width:widthSize }" @click="click">{{ text }}</button>
</template>

<script>
    export default {
        name: 'vButton',
        data() {
            return {
                sizeClass: {
                    small: 'vui-button-small',
                    middle: 'vui-button-middle',
                    larger: 'vui-button-larger'
                },
                typeClass: {
                    default: 'vui-button-default',
                    primary: 'vui-button-primary',
                    ghost: 'vui-button-ghost',
                    dashed: 'vui-button-dashed'
                }
            }
        },
        computed: {
            widthSize: function () {
                let width = this.width;
                if (this.$util.isNumber(width)) width = width + 'px';
                return width;
            },
            className: function () {
                return [this.sizeClass[this.size], this.typeClass[this.type]].join(' ');
            }
        },
        props: {
            size: {
                default: 'small'
            },
            type: {
                type: String,
                default: 'default'
            },
            width: {
                type: [String, Number]
            },
            text: {
                default: 'Button'
            },
        },
        methods: {
            click: function (event) {
                this.$emit('click', event);
            }
        }
    }

</script>

<style scoped>
</style>

<template>
    <div>
        <v-switch size="small" :checked="checked" text="textSwitch" @on-change="onChange"></v-switch>
    </div>
</template>

<script>
    export default {
        name: 'switch',
        data() {
            return {
                checked: false
            }
        },
        methods: {
            onChange: function (event, checked) {
                console.log('checked==>', this.checked)
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

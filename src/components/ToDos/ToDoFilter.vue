<script setup>
import { onMounted, ref } from "vue";
const
  $porps = defineProps(["modelValue"]),
  $emit = defineEmits(["update:modelValue"]),
  _value = ref("");
onMounted(() => {
  _value.value = $porps.modelValue;
})
function clear() {
  _value.value = "";
  publishValue();
}
function publishValue() {
  $emit("update:modelValue", _value.value);
}
</script>
<template>
  <div class="w3-border custom-div">
    <input type="text"
     class="w3-input w3-border-0"
     v-model="_value"
     @kyeup="publishValue()"
     placeholder="Enter filter text here..."
     >
    <button class="w3-border-0" @click="clear()">
    <i class='bx bx-x'></i>
    </button>
    </div>
</template>



<style scoped>
.custom-div{
  display: flex;
}
</style>
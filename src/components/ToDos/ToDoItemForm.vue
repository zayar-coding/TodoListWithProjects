

<script setup>
import { ref } from "vue"
import todoService from "../../services/todo"
const $props = defineProps({
  modelValue: { type: Object, default: () => { return {} } }
}),
  $emit = defineEmits(["update:modelValue"]),
_item = ref({})
_item.value = { ...$props.modelValue }

function emitUpdate() {
  $emit("update:modelValue", _item.value)
}

</script>
<template>
<div class="w3-cell-row w3-padding">
  <div class="w3-cell w3-padding">
    <strong>Description</strong>
    <input class="w3-input w3-border" v-model="_item.text" @blur="emitUpdate()">
  </div>
  <div class="w3-cell w3-padding">
    <strong>Status</strong>
   
    <select name="" id="" class="w3-select w3-border" v-model="_item.status" @change="emitUpdate()">
      <option v-for="state in todoService.getStatusList()" :key="state.id" :value="state.id">
        {{ state.label }}
      </option>
    </select>
  </div>
</div>
</template>
<style>

</style>
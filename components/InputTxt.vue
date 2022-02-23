<template>
    <div class="mb-2 flex items-end">
      <input
        type="text"
        name="composition"
        id="composition"
        placeholder="身長を入力ください"
        class="text-md md:text-xl w-full p-3 border rounded"
      /><span>cm</span>
    </div>
</template>

<script>
export default {
  props: {
    compositions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    change() {
      this.$emit(this.id);
    },
  },
  /* watch: {
    radio() {
      console.log(this.radio);
    },
  }, */
};
</script>
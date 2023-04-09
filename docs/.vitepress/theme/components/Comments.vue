<template>
  <div class="comments-wrapper" id="comments">
    <div class="comments" id="talkee-wrapper">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Comments",
};
</script>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // https://cdn.jsdelivr.net/npm/@foxone/mvm@0.1.29/dist/mvm.min.js
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@foxone/talkee-install-js@0.1.2/dist/ti.min.js";
  script.async = true;
  document.body.appendChild(script);
  script.onload = () => {
    (window as any).tijs({ siteId: 1, authMethods: [
      "metamask", "onekey", "walletconnect",
      "mixin", "fennec"
    ], container: "#talkee-wrapper" })
  };
})

</script>

<style lang="css" scoped>
.comments-wrapper {
  margin-top: 2rem;
  border-top: 1px solid rgba(0,0,0,0.08);
  padding: 1rem 0;
}

#talkee-wrapper :deep(.v-application__wrap) {
  height: auto;
  min-height: 400px;
}

#talkee-wrapper :deep(.talkee) {
  padding: 0;
}

.comments-loading {
  text-align: center;
  padding: 20px;
}
</style>
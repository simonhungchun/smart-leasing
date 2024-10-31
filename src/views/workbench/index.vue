<template>
  <PageWrapper>
    <h1>我是内容</h1>
  </PageWrapper>
</template>
<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { getWorkbenchData } from '/@/api/workbench';
  getWorkbenchData()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
</script>

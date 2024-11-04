<template>
  <PageWrapper>
    <Row :gutter="[10, 10]">
      <!--      左边-->
      <Col
        :lg="{ span: 18 }"
        :sm="{ span: 24 }"
        :xl="{ span: 18 }"
        :xs="{ span: 24 }"
        :xxl="{ span: 18 }"
      >
        <Row :gutter="[10, 10]">
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <div v-for="item in featureList" :key="item.id" class="flex items-center m-[10px]">
                <div
                  class="flex items-center justify-center w-[48px] h-[48px] rounded-[8px]"
                  style="
                    background-image: linear-gradient(
                      90deg,
                      rgb(194, 233, 251) 0%,
                      rgb(167, 203, 253) 0%,
                      rgb(91, 151, 248) 100%
                    );
                  "
                >
                  <Icon :icon="item.icon" color="#fff" size="36" />
                </div>
                <div class="ml-[12px] flex flex-col justify-between">
                  <div class="text-[16px] text-[#444] font-medium">{{ item.name }}</div>
                  <div class="text-[14px] text-[#999] mt-[6px]">{{ item.desc }}</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </Card>
          </Col>
          <Col :lg="{ span: 24 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </Card>
          </Col>
        </Row>
      </Col>
      <!--      右边-->
      <Col
        :lg="{ span: 6 }"
        :sm="{ span: 24 }"
        :xl="{ span: 6 }"
        :xs="{ span: 24 }"
        :xxl="{ span: 6 }"
      >
        <Row :gutter="[10, 10]">
          <Col :lg="{ span: 24 }" :md="{ span: 8 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </Card>
          </Col>
          <Col :lg="{ span: 24 }" :md="{ span: 8 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </Card>
          </Col>
          <Col :lg="{ span: 24 }" :md="{ span: 8 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { getWorkbenchData } from '/@/api/workbench';
  import { Card, Col, Row } from 'ant-design-vue';
  import { ref } from 'vue';
  import { Icon } from '/@/components/Icon';

  const featureList = ref([]);

  getWorkbenchData()
    .then((res) => {
      console.log(res);
      featureList.value = res.featureList;
    })
    .catch((err) => {
      console.log(err);
    });
</script>

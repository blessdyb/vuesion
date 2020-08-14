<template>
  <div
    :class="[$style.vueGrid, fluid && $style.fluid, $style[`v${verticalSpace}`], $style[`h${horizontalSpace}`]]"
    :style="{ textAlign }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api';
import { spacingValidator } from '../../utils';

export default defineComponent({
  name: 'VueGrid',
  props: {
    verticalSpace: { type: String, validator: spacingValidator, default: 'md' },
    horizontalSpace: { type: String, validator: spacingValidator, default: 'md' },
    textAlign: { type: String, default: 'left' },
    fluid: { type: Boolean, default: false },
  },
  setup(props) {
    provide('gridVerticalSpace', props.verticalSpace);
    provide('gridHorizontalSpace', props.horizontalSpace);
    provide('gridTextAlign', props.textAlign);
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueGrid {
  max-width: 425px;
  margin: 0 auto;
  position: relative;
  padding: 0;

  @include mediaMin(tabletPortrait) {
    max-width: $screen-tablet-portrait;
  }

  @include mediaMin(tabletLandscape) {
    max-width: $screen-tablet-landscape;
  }

  @include mediaMin(smallDesktop) {
    max-width: $screen-small-desktop;
  }

  @include mediaMin(largeDesktop) {
    max-width: $screen-large-desktop;
  }

  &.fluid {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }

  &.hsm {
    padding: 0 $gutter-sm;
  }

  &.hmd {
    padding: 0 $gutter-md;
  }

  &.hlg {
    padding: 0 $gutter-lg;
  }

  &.vsm {
    padding-bottom: $gutter-sm;
  }

  &.vmd {
    padding-bottom: $gutter-md;
  }

  &.vlg {
    padding-bottom: $gutter-lg;
  }
}
</style>

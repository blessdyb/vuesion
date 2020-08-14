<template>
  <div
    :class="[$style.vueGridColumn, $style[`v${columnVerticalSpace}`], $style[`h${columnHorizontalSpace}`]]"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import defaultTo from 'lodash/defaultTo';
import { computed, defineComponent, inject } from '@vue/composition-api';
import { spacingValidator } from '../../../utils';

export default defineComponent({
  name: 'VueGridColumn',
  props: {
    verticalSpace: { type: String, validator: spacingValidator, default: null },
    horizontalSpace: { type: String, validator: spacingValidator, default: null },
    width: { type: String, default: null },
    height: { type: String, default: null },
    textAlign: { type: String, default: null },
    canGrow: { type: Boolean, default: true },
    canShrink: { type: Boolean, default: true },
    justifyContent: { type: String, default: null },
    alignSelf: { type: String, default: null },
  },
  setup(props) {
    const rowVerticalSpace = inject<string>('rowVerticalSpace');
    const rowHorizontalSpace = inject<boolean>('rowHorizontalSpace');
    const rowTextAlign = inject<string>('rowTextAlign');
    const rowJustifyContent = inject<string>('rowJustifyContent');

    const columnVerticalSpace = computed(() => defaultTo(props.verticalSpace, rowVerticalSpace));
    const columnHorizontalSpace = computed(() => defaultTo(props.horizontalSpace, rowHorizontalSpace));
    const columnTextAlign = computed(() => defaultTo(props.textAlign, rowTextAlign));
    const columnJustifyContent = computed(() => defaultTo(props.justifyContent, rowJustifyContent));
    const display = computed(() => {
      if (columnJustifyContent.value || props.alignSelf) {
        return 'flex';
      }

      return null;
    });

    const styles = computed(() => {
      return {
        flexBasis: props.width || 'auto',
        textAlign: columnTextAlign.value,
        flexGrow: props.canGrow ? '1' : '0',
        flexShrink: props.canShrink ? '1' : '0',
        display: display.value,
        justifyContent: columnJustifyContent.value,
        alignSelf: props.alignSelf,
      };
    });

    return {
      columnVerticalSpace,
      columnHorizontalSpace,
      columnTextAlign,
      columnJustifyContent,
      styles,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueGridColumn {
  padding: 0;

  @include mediaMax(tabletPortrait) {
    flex-basis: 100% !important;
  }

  @include mediaMin(tabletPortrait) {
    flex: 1;
  }

  &.hsm {
    padding-left: $gutter-sm;
  }

  &.hmd {
    padding-left: $gutter-md;
  }

  &.hlg {
    padding-left: $gutter-lg;
  }

  &.vsm {
    padding-top: $gutter-sm;
  }

  &.vmd {
    padding-top: $gutter-md;
  }

  &.vlg {
    padding-top: $gutter-lg;
  }
}
</style>

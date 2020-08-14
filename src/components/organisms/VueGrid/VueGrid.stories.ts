import { storiesOf } from '@storybook/vue';
import VueButton from '../../atoms/VueButton/VueButton.vue';
import VueGrid from './VueGrid.vue';
import VueGridRow from './VueGridRow/VueGridRow.vue';
import VueGridColumn from './VueGridColumn/VueGridColumn.vue';

const story = storiesOf('Organisms|Grid', module) as any;

story.add(
  'Simple Grid',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid>
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column width="50%">
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column width="50%">
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  'No spacings',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid vertical-space="none" horizontal-space="none">
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column width="50%">
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column width="50%">
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  'Text align',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid text-align="center">
        <vue-grid-row>
            <vue-grid-column>Text 1</vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column>text 3</vue-grid-column>
        </vue-grid-row>
        <vue-grid-row text-align="left">
            <vue-grid-column>Text 1 </vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column>Text 3</vue-grid-column>
        </vue-grid-row>
        <vue-grid-row text-align="right">
            <vue-grid-column>Text 1 </vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column>Text 3</vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column text-align="left">Text 1 </vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column text-align="right">Text 3</vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  '100% width',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid fluid>
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column width="50%">
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column width="50%">
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  'Complex Grid',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid vertical-space="none" fluid>
    <vue-grid-row>
      <vue-grid-column width="30%" :can-grow="false">
        <vue-grid horizontal-space="lg" vertical-space="lg" fluid>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
              <vue-button block>Item 2</vue-button>
            </vue-grid-column>
          </vue-grid-row>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button color="primary" block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
              <vue-button  color="primary" block>Item 2</vue-button>
            </vue-grid-column>
          </vue-grid-row>
        </vue-grid>
      </vue-grid-column>
      <vue-grid-column>
        <vue-grid fluid>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button color="primary" block>Item 1</vue-button>
            </vue-grid-column>
          </vue-grid-row>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button color="secondary" block>Item 1</vue-button>
            </vue-grid-column>
          </vue-grid-row>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button color="success" block>Item 1</vue-button>
            </vue-grid-column>
          </vue-grid-row>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button color="warning" block>Item 1</vue-button>
            </vue-grid-column>
          </vue-grid-row>
        </vue-grid>
      </vue-grid-column>
      <vue-grid-column width="20%" :can-grow="false">
        <vue-grid horizontal-space="sm" vertical-space="sm" fluid>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button color="primary" block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
              <vue-button color="primary" block>Item 2</vue-button>
            </vue-grid-column>
          </vue-grid-row>
          <vue-grid-row>
            <vue-grid-column>
              <vue-button color="secondary" block>item 1</vue-button>
            </vue-grid-column>
          </vue-grid-row>
          <vue-grid-row vertical-space="none">
            <vue-grid-column>
              <vue-button color="success" block>Item 1</vue-button>
            </vue-grid-column>
          </vue-grid-row>
        </vue-grid>
      </vue-grid-column>
    </vue-grid-row>
    <vue-grid-row>
      <vue-grid-column>
        <vue-button color="primary" block>Item 1</vue-button>
      </vue-grid-column>
      <vue-grid-column>
        <vue-button color="primary" block>Item 1</vue-button>
      </vue-grid-column>
    </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

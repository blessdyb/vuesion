<template>
  <form :class="$style.formExample" @submit.prevent="onSubmit">
    <small>
      This example uses <a href="https://github.com/baianat/vee-validate">vee-validate</a> for field validation.
    </small>
    <br />
    <br />
    <br />
    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="firstname"
          id="firstname"
          required
          placeholder="First Name"
          validation="required"
          v-model="form.firstname"
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          name="lastname"
          id="lastname"
          required
          placeholder="Last Name"
          validation="required"
          v-model="form.lastname"
        />
      </vue-grid-item>
    </vue-grid-row>

    <vue-input
      name="email"
      id="email"
      required
      type="email"
      placeholder="E-mail"
      validation="required|email"
      v-model="form.email"
    />

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="street"
          id="street"
          required
          placeholder="Street"
          v-model="form.street"
          validation="required"
          :disabled="addressDisabled"
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          name="zipCode"
          id="zipCode"
          required
          placeholder="Zip code"
          v-model="form.zipCode"
          validation="required|integer"
          :error-message="$t('components.formExample.zipCode.error' /* Please enter a Number */)"
          :disabled="addressDisabled"
        />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="city"
          id="city"
          required
          placeholder="City"
          v-model="form.city"
          validation="required"
          :disabled="addressDisabled"
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-select
          placeholder="Choose Country"
          name="country"
          id="country"
          v-model="form.country"
          :options="countryOptions"
          validation="required"
          required
          :disabled="addressDisabled"
        />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-checkbox
          name="acceptTerms"
          id="acceptTerms"
          v-model="form.acceptTerms"
          label="I accept the terms"
          validation="required"
          required
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-checkbox
          name="newsletterYes"
          id="newsletterYes"
          label="I want to subscribe to the newsletter"
          :checked="form.newsletter === true"
          @click="form.newsletter = !form.newsletter"
          radio
        />
        <br />
        <vue-checkbox
          name="newsletterNo"
          id="newsletterNo"
          label="I don't want to subscribe to the newsletter"
          :checked="form.newsletter === false"
          @click="form.newsletter = !form.newsletter"
          radio
        />
      </vue-grid-item>
    </vue-grid-row>

    <br />
    <vue-button color="primary" :disabled="isSubmitDisabled" :loading="isLoading"> Save </vue-button>
  </form>
</template>

<script lang="ts">
import VueInput from '@components/VueInput/VueInput.vue';
import VueSelect from '@components/VueSelect/VueSelect.vue';
import VueCheckbox from '@components/VueCheckbox/VueCheckbox.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import { addNotification, INotification } from '@components/VueNotificationStack/utils';

export default {
  $_veeValidate: {
    validator: 'new' as 'new',
  },
  name: 'FormExample',
  components: { VueButton, VueGridItem, VueGridRow, VueCheckbox, VueSelect, VueInput },
  data(): any {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        street: '',
        zipCode: '',
        city: '',
        country: '',
        acceptTerms: false,
        newsletter: false,
      },
      countryOptions: [
        { label: 'Germany', value: 'de' },
        { label: 'USA', value: 'us' },
        { label: 'Other', value: 'other' },
      ],
      isLoading: false,
    };
  },
  computed: {
    addressDisabled() {
      return this.form.firstname === '' || this.form.lastname === '' || this.form.email === '';
    },
    hasErrors() {
      return this.errors && this.errors.items.length > 0;
    },
    hasEmptyFields() {
      let hasEmptyField: boolean = false;

      Object.keys(this.form).forEach((key: string) => {
        if (key !== 'newsletter' && (this.form[key] === '' || this.form[key] === false)) {
          hasEmptyField = true;
        }
      });

      return hasEmptyField;
    },
    isSubmitDisabled() {
      return this.hasErrors || this.hasEmptyFields;
    },
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      // tslint:disable-next-line
      console.log(JSON.parse(JSON.stringify(this.form)));

      this.$emit('submit', this.form);

      this.$nextTick(
        /* istanbul ignore next */ () => {
          setTimeout(() => {
            this.isLoading = false;
            addNotification({
              title: 'Data has been saved!',
              text: 'Have a look at the console!',
            } as INotification);
          }, 1000);
        },
      );
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.formExample {
  display: block;
}
</style>

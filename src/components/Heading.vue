<script>
import { h } from '@vue/runtime-core';
export default {
    setup(props, { slots, attrs }) {
        return () =>
            h(
                'h' + attrs.level, // tag name
                { class: ['mt-4', 'mb-2'] }, // props/attributes
                slots.default()
            );
    },
};
</script>

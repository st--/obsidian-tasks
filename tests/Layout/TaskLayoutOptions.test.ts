import { TaskLayoutOptions2 } from '../../src/Layout/TaskLayoutOptions';

describe('TaskLayoutOptions2', () => {
    it('should be constructable', () => {
        const options = new TaskLayoutOptions2();
        expect(options).not.toBeNull();
    });

    it('should show fields by default', () => {
        const options = new TaskLayoutOptions2();

        expect(options.isShown('priority')).toEqual(true);
        expect(options.isShown('createdDate')).toEqual(true);
    });

    it('should be able to hide a field', () => {
        const options = new TaskLayoutOptions2();
        options.hide('createdDate');

        expect(options.isShown('createdDate')).toEqual(false);
    });

    it('should be settable via a boolean', () => {
        const options = new TaskLayoutOptions2();

        options.setVisibility('scheduledDate', false);
        expect(options.isShown('scheduledDate')).toEqual(false);

        options.setVisibility('scheduledDate', true);
        expect(options.isShown('scheduledDate')).toEqual(true);
    });
});

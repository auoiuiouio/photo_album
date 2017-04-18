import DS from 'ember-data';

export default DS.Model.extend({
	body: DS.attr('string'),
  title: DS.attr('string'),
	userId: DS.attr('number'),
  albumId: DS.attr('number'),
  thumbnailUrl: DS.attr('string'),
  url: DS.attr('string')
});

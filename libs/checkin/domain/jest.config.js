module.exports = {
  name: 'checkin-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/checkin/domain',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

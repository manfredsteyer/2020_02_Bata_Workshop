module.exports = {
  name: 'validation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/validation',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

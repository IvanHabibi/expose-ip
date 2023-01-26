require('dotenv').config()
console.log(process.env) 

const opentelemetry = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-http");
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // optional - default url is http://localhost:4318/v1/traces
    // url: "http://my-release-signoz-otel-collector:4318/v1/traces",
    url: process.env.OTEL_URL,
    // optional - collection of custom headers to be sent with each request, empty by default
    headers: {},
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'sample_new_node_app'
    })
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});
sdk.start();
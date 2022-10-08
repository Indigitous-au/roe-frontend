FROM golang as gobuild
WORKDIR /webrtcchess
COPY . .
RUN go build

FROM node:16.17.1
# COPY --from=golang:1.13-alpine /usr/local/go/ /usr/local/go/
WORKDIR /webrtcchess
COPY . .
RUN npm install
RUN npm run build
COPY --from=gobuild /webrtcchess/webrtc-chess .
EXPOSE 8080
CMD ./webrtc-chess

FROM node:16
COPY --from=golang:1.13-alpine /usr/local/go/ /usr/local/go/
COPY . .
WORKDIR /webrtcchess
RUN npm build
RUN go build
EXPOSE 8080
CMD webrtc-chess
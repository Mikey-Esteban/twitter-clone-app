module Api
  module V1
    class ChirpsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        chirps = Chirp.all.order(created_at: :desc)

        render json: ChirpSerializer.new(chirps, options).serializable_hash.to_json
      end

      def show
        chirp = Chirp.find_by(params[:id])

        render json: ChirpSerializer.new(chirp, options).serializable_hash.to_json
      end

      def create
        chirp = Chirp.new(chirp_params)

        if chirp.save
          render json: ChirpSerializer.new(chirp).serializable_hash.to_json
        else
          render json: { error: chirp.errors.messages }, status: 422
        end
      end

      def update
        chirp = Chirp.find_by(params[:id])

        if chirp.update(chirp_params)  # need to add params to update
          render json: ChirpSerializer.new(chirp, options).serializable_hash.to_json
        else
          render json: { error: chirp.errors.messages }, status: 422
        end
      end

      def destroy
        chirp = Chirp.find_by(params[:id])

        if chirp.destroy
          head :no_content
        else
          render json: { error: chirp.errors.messages }, status: 422
        end
      end

      private

      def chirp_params
        params.require(:chirp).permit(:chirp)
      end

      def options
        @options ||= { include: %i[comments] }
      end
    end
  end
end

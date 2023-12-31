class MembersController < ApplicationController
  before_action :set_member, only: %i[ show edit update destroy descendants head_descendants_limited]

  # GET /members or /members.json
  def index
    @code = params[:admin]
    @show_delete =  Rails.configuration.admin_code.eql?(@code)
    if params[:branch].present?
      @members = Member.where(branch: params[:branch])
      @list_title = "#{params[:branch]}"
    elsif params[:head].present?
      @member = Member.find(params[:head])
      @members = [@member]
      @members << @member.spouse unless @member.spouse.nil?
      @members << @member.spouse2 unless @member.spouse2.nil?
      @members = @members << @member.descendants
    else
      @members = Member.all
      @list_title = ""
    end
  end

  def search
    @members = Member.where("name LIKE ?", Member.sanitize_sql_like(params[:name]) + "%")#.pluck(:id, :name)
    render json: @members
  end
  # GET /members/1 or /members/1.json
  def show
  end

  # GET /members/new
  def new
    @member = Member.new(branch: 'Manuel')
    @members = Member.all
  end

  # GET /members/1/edit
  def edit
    @members = Member.all
  end

  # POST /members or /members.json
  def create
    @member = Member.new(member_params)

    respond_to do |format|
      if @member.save
        format.html { redirect_to member_url(@member), notice: "Member was successfully created." }
        format.json { render :show, status: :created, location: @member }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @member.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /members/1 or /members/1.json
  def update
    respond_to do |format|
      if @member.update(member_params)
        format.html { redirect_to member_url(@member), notice: "Member was successfully updated." }
        format.json { render :show, status: :ok, location: @member }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @member.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /members/1 or /members/1.json
  def destroy
    @member.destroy

    respond_to do |format|
      format.html { redirect_to members_url, notice: "Member was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def descendants
    @spouse = @member.spouse
    @spouse2 = @member.spouse2
    @descendants = @member.descendants
    
    if params[:list].present?
      @footer = true
      render "list" 
    end
  end

  def head_descendants_limited
    @spouse = @member.spouse
    @spouse2 = @member.spouse2
    @descendants = @member.descendants.delete_if do |member|
      member.generation_no > 4
    end
    @footer = true
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def member_params
      params.require(:member).permit(:name, :nicknames, :birth, :death, :spouse_id, :mother_id, :father_id, :branch, :in_law)
    end
end
